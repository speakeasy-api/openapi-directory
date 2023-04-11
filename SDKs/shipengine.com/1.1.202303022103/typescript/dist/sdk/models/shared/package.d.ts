import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
import { LabelMessages } from "./labelmessages";
import { Weight } from "./weight";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
 * @remarks
 *
 */
export declare class PackageMonetaryValue extends SpeakeasyBase {
    /**
     * The monetary amount, in the specified currency.
     */
    amount: number;
    currency: string;
}
/**
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
 *
 * @remarks
 *
 */
export declare class PackageInput extends SpeakeasyBase {
    /**
     * A short description of the package content. Required for shipments moving to, from, and through Mexico.
     *
     * @remarks
     *
     */
    contentDescription?: string;
    /**
     * The package dimensions
     */
    dimensions?: Dimensions;
    /**
     * An external package id.
     */
    externalPackageId?: string;
    /**
     * The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
     *
     * @remarks
     *
     */
    insuredValue?: PackageMonetaryValue;
    labelMessages?: LabelMessages;
    /**
     * The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
     *
     * @remarks
     *
     */
    packageCode?: string;
    /**
     * A string that uniquely identifies this [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/)
     */
    packageId?: string;
    /**
     * The package weight
     */
    weight: Weight;
}
/**
 * A link to a related resource, or an empty object if there is no resource to link to
 */
export declare class PackageOptionalLink extends SpeakeasyBase {
    /**
     * The URL of the linked resource, if any
     */
    href?: string;
    /**
     * The type of resource, or the type of relationship to the parent resource
     */
    type?: string;
}
/**
 * Reference to the various downloadable file formats for the generated label
 *
 * @remarks
 *
 */
export declare class PackageLabelDownload extends SpeakeasyBase {
    /**
     * The URL of the linked resource, if any
     */
    href?: string;
    /**
     * The URL for the pdf generated label
     */
    pdf?: string;
    /**
     * The URL for the png generated label
     */
    png?: string;
    /**
     * The URL for the zpl generated label
     */
    zpl?: string;
}
/**
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
 *
 * @remarks
 *
 */
export declare class Package extends SpeakeasyBase {
    /**
     * A short description of the package content. Required for shipments moving to, from, and through Mexico.
     *
     * @remarks
     *
     */
    contentDescription?: string;
    /**
     * The package dimensions
     */
    dimensions?: Dimensions;
    /**
     * An external package id.
     */
    externalPackageId?: string;
    /**
     * The form download for any customs that are needed
     */
    formDownload?: PackageOptionalLink;
    /**
     * The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
     *
     * @remarks
     *
     */
    insuredValue?: PackageMonetaryValue;
    /**
     * The label download for the package
     */
    labelDownload?: PackageLabelDownload;
    labelMessages?: LabelMessages;
    /**
     * The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.
     *
     * @remarks
     *
     */
    packageCode?: string;
    /**
     * A string that uniquely identifies this [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/)
     */
    packageId?: string;
    /**
     * Package sequence
     */
    sequence?: number;
    /**
     * The tracking number for the package.  The format depends on the carrier.
     *
     * @remarks
     *
     */
    trackingNumber?: string;
    /**
     * The package weight
     */
    weight: Weight;
}

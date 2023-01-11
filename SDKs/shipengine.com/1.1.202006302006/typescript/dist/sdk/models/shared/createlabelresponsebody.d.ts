import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { LabelChargeEventEnum } from "./labelchargeeventenum";
import { Package } from "./package";
/**
 * A link to a related resource, or an empty object if there is no resource to link to
**/
export declare class CreateLabelResponseBodyOptionalLink extends SpeakeasyBase {
    href: string;
    type?: string;
}
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
**/
export declare class CreateLabelResponseBodyMonetaryValue extends SpeakeasyBase {
    amount: number;
    currency: CurrencyEnum;
}
/**
 * Reference to the various downloadable file formats for the generated label
 *
**/
export declare class CreateLabelResponseBodyLabelDownload extends SpeakeasyBase {
    href?: string;
    pdf?: string;
    png?: string;
    zpl?: string;
}
/**
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 *
**/
export declare class CreateLabelResponseBodyOutput extends SpeakeasyBase {
    batchId: Record<string, any>;
    carrierCode: Record<string, any>;
    carrierId: Record<string, any>;
    chargeEvent: LabelChargeEventEnum;
    createdAt: Record<string, any>;
    formDownload: CreateLabelResponseBodyOptionalLink;
    insuranceClaim: CreateLabelResponseBodyOptionalLink;
    insuranceCost: CreateLabelResponseBodyMonetaryValue;
    isInternational: boolean;
    isReturnLabel: boolean;
    labelDownload: CreateLabelResponseBodyLabelDownload;
    labelFormat: Record<string, any>;
    labelId: Record<string, any>;
    labelImageId: Record<string, any>;
    labelLayout: Record<string, any>;
    packageCode: Record<string, any>;
    packages: Package[];
    rmaNumber: string;
    serviceCode: Record<string, any>;
    shipDate: Record<string, any>;
    shipmentCost: CreateLabelResponseBodyMonetaryValue;
    shipmentId: Record<string, any>;
    status: Record<string, any>;
    trackable: boolean;
    trackingNumber: string;
    trackingStatus: Record<string, any>;
    voided: boolean;
    voidedAt: Record<string, any>;
}

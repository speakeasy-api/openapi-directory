import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { Dimensions } from "./dimensions";
import { LabelMessages } from "./labelmessages";
import { Weight } from "./weight";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
**/
export declare class PackageMonetaryValue extends SpeakeasyBase {
    amount: number;
    currency: CurrencyEnum;
}
/**
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
**/
export declare class PackageInput extends SpeakeasyBase {
    dimensions?: Dimensions;
    externalPackageId?: string;
    insuredValue?: PackageMonetaryValue;
    labelMessages?: LabelMessages;
    packageCode?: string;
    weight: Weight;
}
/**
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
**/
export declare class Package extends SpeakeasyBase {
    dimensions?: Dimensions;
    externalPackageId?: string;
    insuredValue?: PackageMonetaryValue;
    labelMessages?: LabelMessages;
    packageCode?: string;
    trackingNumber?: Record<string, any>;
    weight: Weight;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCustomTypeSecurity extends SpeakeasyBase {
    apiKey: string;
}
/**
 * Country where the custom type is valid
 */
export declare enum DeleteCustomTypeCountryEnum {
    Br = "BR",
    Cl = "CL",
    Co = "CO",
    Cr = "CR",
    Ec = "EC",
    Mx = "MX",
    Pe = "PE",
    All = "ALL"
}
export declare class DeleteCustomTypeRequest extends SpeakeasyBase {
    /**
     * Country where the custom type is valid
     */
    country?: DeleteCustomTypeCountryEnum;
    /**
     * Name of the custom type to be deleted
     */
    type: string;
}
export declare class DeleteCustomTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductModuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetProductModuleRequest extends SpeakeasyBase {
    /**
     * Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.
     */
    productModuleNumber: string;
}
export declare class GetProductModuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}

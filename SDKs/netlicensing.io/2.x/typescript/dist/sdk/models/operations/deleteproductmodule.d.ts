import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteProductModuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteProductModuleRequest extends SpeakeasyBase {
    /**
     * Force object deletion and all descendants.
     */
    forceCascade?: boolean;
    /**
     * Unique number (across all Products of a Vendor) that identifies the Product Module.
     */
    productModuleNumber: string;
}
export declare class DeleteProductModuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}

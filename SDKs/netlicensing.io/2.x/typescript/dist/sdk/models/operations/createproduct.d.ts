import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProductSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Vat mode for Product. Supported types: GROSS, NET
 */
export declare enum CreateProductRequestBodyVatModeEnum {
    Gross = "GROSS",
    Net = "NET"
}
export declare class CreateProductRequestBody extends SpeakeasyBase {
    /**
     * If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses.
     */
    active: boolean;
    /**
     * Product description.
     */
    description?: string;
    /**
     * If set to 'true', non-existing Licensees will be created at first validation attempt.
     */
    licenseeAutoCreate?: boolean;
    /**
     * Licensing information.
     */
    licensingInfo?: string;
    /**
     * Product name. Together with the version identifies the Product for the end customer.
     */
    name: string;
    /**
     * Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one.
     */
    number?: string;
    /**
     * Vat mode for Product. Supported types: GROSS, NET
     */
    vatMode?: CreateProductRequestBodyVatModeEnum;
    /**
     * Product version. Convenience parameter, additional to the Product name.
     */
    version: string;
}
export declare class CreateProductResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}

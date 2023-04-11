import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProductSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Vat mode for Product. Supported types: GROSS, NET
 */
export declare enum UpdateProductRequestBodyVatModeEnum {
    Gross = "GROSS",
    Net = "NET"
}
export declare class UpdateProductRequestBody extends SpeakeasyBase {
    /**
     * If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses.
     */
    active?: boolean;
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
    name?: string;
    /**
     * New Product number (update)
     */
    number?: string;
    /**
     * Vat mode for Product. Supported types: GROSS, NET
     */
    vatMode?: UpdateProductRequestBodyVatModeEnum;
    /**
     * Product version. Convenience parameter, additional to the Product name.
     */
    version?: string;
}
export declare class UpdateProductRequest extends SpeakeasyBase {
    requestBody?: UpdateProductRequestBody;
    /**
     * Unique number that identifies the Product.
     */
    productNumber: string;
}
export declare class UpdateProductResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}

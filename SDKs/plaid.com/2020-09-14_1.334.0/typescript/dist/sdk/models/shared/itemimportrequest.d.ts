import { SpeakeasyBase } from "../../../internal/utils";
import { ItemImportRequestOptions } from "./itemimportrequestoptions";
import { ItemImportRequestUserAuth } from "./itemimportrequestuserauth";
import { ProductsEnum } from "./productsenum";
/**
 * ItemImportRequest defines the request schema for `/item/import`
 */
export declare class ItemImportRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to configure `/item/import` request.
     */
    options?: ItemImportRequestOptions;
    /**
     * Array of product strings
     */
    products: ProductsEnum[];
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * Object of user ID and auth token pair, permitting Plaid to aggregate a user’s accounts
     */
    userAuth: ItemImportRequestUserAuth;
}

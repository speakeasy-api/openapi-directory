import { SpeakeasyBase } from "../../../internal/utils";
import { BundleResource } from "./bundleresource";
import { FetchMetaResponse } from "./fetchmetaresponse";
/**
 * OK
 */
export declare class FetchBundleResponse extends SpeakeasyBase {
    data: BundleResource;
    meta?: FetchMetaResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { BundleResource } from "./bundleresource";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
/**
 * OK
 */
export declare class UpdateBundleResponse extends SpeakeasyBase {
    data: BundleResource;
    meta?: CreateOrUpdateMetaResponse;
}

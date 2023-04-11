import { SpeakeasyBase } from "../../../internal/utils";
import { BundleResource } from "./bundleresource";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
/**
 * OK
 */
export declare class CreateBundleResponse extends SpeakeasyBase {
    data: BundleResource;
    meta?: CreateOrUpdateMetaResponse;
}

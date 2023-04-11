import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { GroupResource } from "./groupresource";
import { TokenResource } from "./tokenresource";
/**
 * Created
 */
export declare class CreateTokenResponse extends SpeakeasyBase {
    data: TokenResource;
    included?: GroupResource[];
    meta?: CreateOrUpdateMetaResponse;
}

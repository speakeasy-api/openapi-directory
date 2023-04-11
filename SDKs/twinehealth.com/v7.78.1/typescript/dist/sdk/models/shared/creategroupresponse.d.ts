import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { GroupResource } from "./groupresource";
/**
 * Created
 */
export declare class CreateGroupResponse extends SpeakeasyBase {
    data: GroupResource;
    meta?: CreateOrUpdateMetaResponse;
}

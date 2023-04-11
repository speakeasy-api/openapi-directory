import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupResponse } from "./contactgroupresponse";
/**
 * The response to a batch get contact groups request.
 */
export declare class BatchGetContactGroupsResponse extends SpeakeasyBase {
    /**
     * The list of responses for each requested contact group resource.
     */
    responses?: ContactGroupResponse[];
}

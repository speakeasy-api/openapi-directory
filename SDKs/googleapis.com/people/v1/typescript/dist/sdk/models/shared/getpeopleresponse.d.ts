import { SpeakeasyBase } from "../../../internal/utils";
import { PersonResponse } from "./personresponse";
/**
 * The response to a get request for a list of people by resource name.
 */
export declare class GetPeopleResponse extends SpeakeasyBase {
    /**
     * The response for each requested resource name.
     */
    responses?: PersonResponse[];
}

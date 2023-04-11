import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Embed full person info
 */
export declare enum GetUserFollowsPeopleEmbedEnum {
    Person = "person"
}
export declare class GetUserFollowsPeopleRequest extends SpeakeasyBase {
    /**
     * Embed full person info
     */
    embed?: GetUserFollowsPeopleEmbedEnum;
}
export declare class GetUserFollowsPeopleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of followed people
     */
    personFollows?: shared.PersonFollow[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

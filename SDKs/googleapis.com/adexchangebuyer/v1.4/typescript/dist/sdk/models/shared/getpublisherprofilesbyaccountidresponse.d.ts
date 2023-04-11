import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherProfileApiProto } from "./publisherprofileapiproto";
/**
 * Successful response
 */
export declare class GetPublisherProfilesByAccountIdResponse extends SpeakeasyBase {
    /**
     * Profiles for the requested publisher
     */
    profiles?: PublisherProfileApiProto[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse } from "./googlesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse";
/**
 * Successful response
 */
export declare class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse extends SpeakeasyBase {
    /**
     * The list updates requested by the clients. The number of responses here may be less than the number of requests sent by clients. This is the case, for example, if the server has no updates for a particular list.
     */
    listUpdateResponses?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse[];
    /**
     * The minimum duration the client must wait before issuing any update request. If this field is not set clients may update as soon as they want.
     */
    minimumWaitDuration?: string;
}

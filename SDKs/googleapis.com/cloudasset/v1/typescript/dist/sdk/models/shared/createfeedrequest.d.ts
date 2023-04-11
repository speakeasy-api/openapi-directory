import { SpeakeasyBase } from "../../../internal/utils";
import { Feed } from "./feed";
/**
 * Create asset feed request.
 */
export declare class CreateFeedRequest extends SpeakeasyBase {
    /**
     * An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics.
     */
    feed?: Feed;
    /**
     * Required. This is the client-assigned asset feed identifier and it needs to be unique under a specific parent project/folder/organization.
     */
    feedId?: string;
}

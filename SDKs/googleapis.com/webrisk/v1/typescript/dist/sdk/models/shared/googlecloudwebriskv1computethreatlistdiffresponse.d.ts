import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum } from "./googlecloudwebriskv1computethreatlistdiffresponsechecksum";
import { GoogleCloudWebriskV1ThreatEntryAdditions } from "./googlecloudwebriskv1threatentryadditions";
import { GoogleCloudWebriskV1ThreatEntryRemovals } from "./googlecloudwebriskv1threatentryremovals";
/**
 * The type of response. This may indicate that an action must be taken by the client when the response is received.
 */
export declare enum GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    Diff = "DIFF",
    Reset = "RESET"
}
/**
 * Successful response
 */
export declare class GoogleCloudWebriskV1ComputeThreatListDiffResponse extends SpeakeasyBase {
    /**
     * Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.
     */
    additions?: GoogleCloudWebriskV1ThreatEntryAdditions;
    /**
     * The expected state of a client's local database.
     */
    checksum?: GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum;
    /**
     * The new opaque client version token. This should be retained by the client and passed into the next call of ComputeThreatListDiff as 'version_token'. A separate version token should be stored and used for each threatList.
     */
    newVersionToken?: string;
    /**
     * The soonest the client should wait before issuing any diff request. Querying sooner is unlikely to produce a meaningful diff. Waiting longer is acceptable considering the use case. If this field is not set clients may update as soon as they want.
     */
    recommendedNextDiff?: string;
    /**
     * Contains the set of entries to remove from a local database.
     */
    removals?: GoogleCloudWebriskV1ThreatEntryRemovals;
    /**
     * The type of response. This may indicate that an action must be taken by the client when the response is received.
     */
    responseType?: GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum;
}

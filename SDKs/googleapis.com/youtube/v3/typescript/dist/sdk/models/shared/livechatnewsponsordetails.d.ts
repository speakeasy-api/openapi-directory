import { SpeakeasyBase } from "../../../internal/utils";
export declare class LiveChatNewSponsorDetails extends SpeakeasyBase {
    /**
     * If the viewer just had upgraded from a lower level. For viewers that were not members at the time of purchase, this field is false.
     */
    isUpgrade?: boolean;
    /**
     * The name of the Level that the viewer just had joined. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.
     */
    memberLevelName?: string;
}

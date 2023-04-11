import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The dps messages' message status
 */
export declare enum DpsMessageDpsMessageMessageStatusEnum {
    Retrieved = "Retrieved",
    Applied = "Applied",
    Unresolved = "Unresolved",
    Ignored = "Ignored",
    Information = "Information"
}
export declare class DpsMessageDpsMessage extends SpeakeasyBase {
    /**
     * The dps messages' form type
     */
    formType?: string;
    /**
     * The dps messages' issue date
     */
    issueDate?: Date;
    /**
     * The dps messages' last updated
     */
    lastUpdated?: Date;
    /**
     * The dps messages' message
     */
    message?: string;
    /**
     * The dps messages' message status
     */
    messageStatus?: DpsMessageDpsMessageMessageStatusEnum;
    /**
     * The dps messages' message type
     */
    messageType?: string;
    /**
     * The dps messages' processing result
     */
    processingResult?: string;
    /**
     * The dps messages' retrieve date
     */
    retrieveDate?: Date;
    /**
     * The dps messages' sequence number
     */
    sequenceNumber?: number;
}
/**
 * The dps message object.
 */
export declare class DpsMessage extends SpeakeasyBase {
    dpsMessage?: DpsMessageDpsMessage;
}

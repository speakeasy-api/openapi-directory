import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The format of the metadata file defining the create or update actions to be performed on one or more EPG programs.
 */
export declare enum ProgramInformationBatchFormatEnum {
    Radiodns = "radiodns"
}
/**
 * The program information to associate the ingested metadata with. This is only required if the metadata format doesn't provide the program title and air date information directly. If this is specified, it will overrite the value specfified in the metadata file. If this is specified, the metadata file should only contain one program.
 */
export declare class ProgramInformationBatchProgram extends SpeakeasyBase {
    /**
     * The airDate for the program in ISO 8601 format.
     */
    airDate: string;
    /**
     * The title of the program.
     */
    title: string;
}
/**
 * The current processing status.
 */
export declare enum ProgramInformationBatchStatusEnum {
    Queued = "queued",
    Processing = "processing",
    Failed = "failed",
    Successful = "successful"
}
/**
 * An electronic program guide (EPG) batch operation to create or update metadata on one or more guide programs.
 */
export declare class ProgramInformationBatch extends SpeakeasyBase {
    /**
     * The date and time the batch was created.
     */
    createdDate: string;
    /**
     * The date and time the batch finished (either successful or failed).
     */
    finishedDate?: string;
    /**
     * The format of the metadata file defining the create or update actions to be performed on one or more EPG programs.
     */
    format: ProgramInformationBatchFormatEnum;
    /**
     * The ID of the batch.
     */
    id: number;
    /**
     * The human readable success or failure message.
     */
    message?: string;
    /**
     * The optional name of the batch for human reference.
     */
    name?: string;
    /**
     * The program information to associate the ingested metadata with. This is only required if the metadata format doesn't provide the program title and air date information directly. If this is specified, it will overrite the value specfified in the metadata file. If this is specified, the metadata file should only contain one program.
     */
    program?: ProgramInformationBatchProgram;
    /**
     * The current processing status.
     */
    status: ProgramInformationBatchStatusEnum;
    /**
     * The URI to the metadata file defining the batch creates/updates.
     */
    uri?: string;
}

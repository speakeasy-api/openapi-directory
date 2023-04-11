import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV2MetapubProgramInformationBatchSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
/**
 * The format of the metadata file defining the create or update actions to be performed on one or more EPG programs. For more information on how RadioDNS EPG maps to ContentDepot <a href="/api/epg-cd-mapping.html">click here </a>
 */
export declare enum PostApiV2MetapubProgramInformationBatchRequestBodyFormatEnum {
    Radiodns = "radiodns"
}
/**
 * The program information to associate the ingested metadata with. This is only required if the metadata format doesn't provide the program title and air date information directly.
 */
export declare class PostApiV2MetapubProgramInformationBatchRequestBodyProgram extends SpeakeasyBase {
    airDate: string;
    title: string;
}
/**
 * The batch operation definition.
 */
export declare class PostApiV2MetapubProgramInformationBatchRequestBody extends SpeakeasyBase {
    /**
     * The format of the metadata file defining the create or update actions to be performed on one or more EPG programs. For more information on how RadioDNS EPG maps to ContentDepot <a href="/api/epg-cd-mapping.html">click here </a>
     */
    format: PostApiV2MetapubProgramInformationBatchRequestBodyFormatEnum;
    /**
     * An optional human readable name for the batch.
     */
    name?: string;
    /**
     * The program information to associate the ingested metadata with. This is only required if the metadata format doesn't provide the program title and air date information directly.
     */
    program?: PostApiV2MetapubProgramInformationBatchRequestBodyProgram;
    /**
     * The URI to the metadata file. Currently only the ```cddrive``` scheme is supported.
     */
    uri: string;
}
export declare class PostApiV2MetapubProgramInformationBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The accepted batch information that is queued for processing.
     */
    programInformationBatch?: shared.ProgramInformationBatch;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

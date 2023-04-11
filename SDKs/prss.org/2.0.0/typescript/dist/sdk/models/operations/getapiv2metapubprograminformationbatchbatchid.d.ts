import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2MetapubProgramInformationBatchBatchIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2MetapubProgramInformationBatchBatchIdRequest extends SpeakeasyBase {
    batchId: number;
}
export declare class GetApiV2MetapubProgramInformationBatchBatchIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The batch information.
     */
    programInformationBatch?: shared.ProgramInformationBatch;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

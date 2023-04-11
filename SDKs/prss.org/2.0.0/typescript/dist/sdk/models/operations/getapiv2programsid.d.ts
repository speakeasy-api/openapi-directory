import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2ProgramsIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2ProgramsIdRequest extends SpeakeasyBase {
    /**
     * The ID of the program to operate on.
     */
    id: number;
}
export declare class GetApiV2ProgramsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed, or the user is not permitted to view this program.
     */
    error?: shared.ErrorT;
    /**
     * The matching program.
     */
    program?: shared.Program;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

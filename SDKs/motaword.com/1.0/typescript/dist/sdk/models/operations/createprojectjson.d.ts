import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProjectJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FileTooLarge FileTooSmall FileWasAlreadyUploaded
     */
    error?: shared.ErrorT;
    /**
     * Newly created project
     */
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

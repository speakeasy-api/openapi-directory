import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateContinuousProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Newly created continuous project
     */
    continuousProject?: shared.ContinuousProject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

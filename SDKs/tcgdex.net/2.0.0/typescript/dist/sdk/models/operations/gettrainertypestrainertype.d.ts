import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrainerTypesTrainerTypeRequest extends SpeakeasyBase {
    trainerType: string;
}
export declare class GetTrainerTypesTrainerTypeResponse extends SpeakeasyBase {
    /**
     * Get the cards containing with the specified trainer-type
     */
    cardResumes?: shared.CardResume[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

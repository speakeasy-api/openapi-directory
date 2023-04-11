import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEnergyTypesEnergyTypeRequest extends SpeakeasyBase {
    energyType: string;
}
export declare class GetEnergyTypesEnergyTypeResponse extends SpeakeasyBase {
    /**
     * Get the Energy cards containing the specified energy-type
     */
    cardResumes?: shared.CardResume[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

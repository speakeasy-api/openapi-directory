import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PairwithSpeakerResponse extends SpeakeasyBase {
    contentType: string;
    pairwithSpeaker200TextPlainObject?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsFutureResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    offeringMetadataResponses?: shared.OfferingMetadataResponse[];
    statusCode: number;
}

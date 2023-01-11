import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetEqualizerValuesRequest extends SpeakeasyBase {
    request: shared.SetEqualizerValuesRequest;
}
export declare class SetEqualizerValuesResponse extends SpeakeasyBase {
    contentType: string;
    setEqualizerValues200TextPlainObject?: string;
    statusCode: number;
}

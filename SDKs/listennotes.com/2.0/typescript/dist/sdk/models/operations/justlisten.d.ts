import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JustListenHeaders extends SpeakeasyBase {
    xListenAPIKey: string;
}
export declare class JustListenRequest extends SpeakeasyBase {
    headers: JustListenHeaders;
}
export declare class JustListenResponse extends SpeakeasyBase {
    contentType: string;
    episodeSimple?: shared.EpisodeSimple;
    headers: Record<string, string[]>;
    statusCode: number;
}

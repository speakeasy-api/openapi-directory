import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesAchievementsReadRequest extends SpeakeasyBase {
    /**
     * An ID or a slug identifying this Game.
     */
    id: string;
}
export declare class GamesAchievementsReadResponse extends SpeakeasyBase {
    contentType: string;
    parentAchievement?: shared.ParentAchievement;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

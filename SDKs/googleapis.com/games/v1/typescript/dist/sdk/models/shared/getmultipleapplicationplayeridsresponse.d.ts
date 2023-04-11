import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationPlayerId } from "./applicationplayerid";
/**
 * Response message for GetMultipleApplicationPlayerIds rpc.
 */
export declare class GetMultipleApplicationPlayerIdsResponse extends SpeakeasyBase {
    /**
     * Output only. The requested applications along with the scoped ids for tha player, if that player has an id for the application. If not, the application is not included in the response.
     */
    playerIds?: ApplicationPlayerId[];
}

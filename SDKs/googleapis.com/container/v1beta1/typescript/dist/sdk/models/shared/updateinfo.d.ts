import { SpeakeasyBase } from "../../../internal/utils";
import { BlueGreenInfo } from "./bluegreeninfo";
/**
 * UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade.
 */
export declare class UpdateInfo extends SpeakeasyBase {
    /**
     * Information relevant to blue-green upgrade.
     */
    blueGreenInfo?: BlueGreenInfo;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodePeer extends SpeakeasyBase {
    blockHeight: number;
    blockchainApi: boolean;
    headerHeight: number;
    lastSeen: number;
    name: string;
    openRestApi: boolean;
    responseTime: number;
    url: string;
}

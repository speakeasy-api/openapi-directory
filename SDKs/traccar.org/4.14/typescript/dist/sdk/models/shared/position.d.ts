import { SpeakeasyBase } from "../../../internal/utils";
export declare class Position extends SpeakeasyBase {
    accuracy?: number;
    address?: string;
    altitude?: number;
    attributes?: Record<string, any>;
    course?: number;
    deviceId?: number;
    deviceTime?: Date;
    fixTime?: Date;
    id?: number;
    latitude?: number;
    longitude?: number;
    network?: Record<string, any>;
    outdated?: boolean;
    protocol?: string;
    serverTime?: Date;
    speed?: number;
    valid?: boolean;
}

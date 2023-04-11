import { SpeakeasyBase } from "../../../internal/utils";
export declare class Position extends SpeakeasyBase {
    accuracy?: number;
    address?: string;
    altitude?: number;
    attributes?: Record<string, any>;
    course?: number;
    deviceId?: number;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    deviceTime?: Date;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    fixTime?: Date;
    id?: number;
    latitude?: number;
    longitude?: number;
    network?: Record<string, any>;
    outdated?: boolean;
    protocol?: string;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    serverTime?: Date;
    /**
     * in knots
     */
    speed?: number;
    valid?: boolean;
}

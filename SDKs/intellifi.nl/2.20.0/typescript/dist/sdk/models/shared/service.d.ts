import { SpeakeasyBase } from "../../../internal/utils";
export declare class Service extends SpeakeasyBase {
    bootCount?: number;
    config?: Record<string, any>;
    configRequest?: Record<string, any>;
    id?: string;
    name?: string;
    restartRequest?: boolean;
    timeCreated?: string;
    timeUpdated?: string;
    url?: string;
    version?: string;
}
export declare class ServiceInput extends SpeakeasyBase {
    configRequest?: Record<string, any>;
    restartRequest?: boolean;
}

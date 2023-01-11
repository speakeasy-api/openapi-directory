import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedSecretRole } from "./nestedsecretrole";
export declare class Secret extends SpeakeasyBase {
    created?: Date;
    customFields?: Record<string, any>;
    device: NestedDevice;
    hash?: string;
    id?: number;
    lastUpdated?: Date;
    name?: string;
    plaintext: string;
    role: NestedSecretRole;
    tags?: string[];
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class Policy extends SpeakeasyBase {
    action: number;
    createdAt: Date;
    name: string;
    owner: boolean;
    priority: number;
    resources: string[];
    roles: string[];
    updatedAt: Date;
}

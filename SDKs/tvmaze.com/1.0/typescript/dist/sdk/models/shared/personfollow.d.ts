import { SpeakeasyBase } from "../../../internal/utils";
export declare class PersonFollowEmbedded extends SpeakeasyBase {
    person?: Record<string, any>;
}
export declare class PersonFollow extends SpeakeasyBase {
    embedded?: PersonFollowEmbedded;
    personId?: number;
}

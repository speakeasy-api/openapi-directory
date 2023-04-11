import { SpeakeasyBase } from "../../../internal/utils";
import { FhirObservation } from "./fhirobservation";
import { FhirProcedure } from "./fhirprocedure";
import { Group } from "./group";
import { Link } from "./link";
export declare class FhirEncounter extends SpeakeasyBase {
    date?: Date;
    encounterType?: string;
    group?: Group;
    id?: number;
    identifier?: string;
    links?: Link[];
    observations?: FhirObservation[];
    procedures?: FhirProcedure[];
    status?: string;
}

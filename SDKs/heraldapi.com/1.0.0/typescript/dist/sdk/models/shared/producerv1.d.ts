import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Producers are the entities that represent customers to institutions.
 */
export declare class ProducerV1 extends SpeakeasyBase {
    /**
     * The producers email.
     */
    email: string;
    /**
     * An external_id is a value you can associate with a producer to more easily track and manage them.
     */
    externalId?: string;
    /**
     * `id` of a specific producer.
     */
    id: string;
    /**
     * The producers name.
     */
    name: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AdminDimension } from "./admindimension";
import { AdminFilterAttribute } from "./adminfilterattribute";
export declare class AdminCorpus extends SpeakeasyBase {
    customDimensions?: AdminDimension[];
    /**
     * A description for the corpus.
     */
    description?: string;
    /**
     * The time at which the corpus was provisioned.
     */
    dtProvision?: string;
    /**
     * Whether the corpus is enabled for use or not.
     */
    enabled?: boolean;
    /**
     * This is an advanced setting for changing the underlying model type.  The
     *
     * @remarks
     * default value is "1", which is Vectara's high-performing global model.
     * Underlying models may be swapped for some paying customers by contacting
     * our support team.
     */
    encoderId?: string;
    /**
     * Encryption is on by default and cannot be turned off.
     */
    encrypted?: boolean;
    filterAttributes?: AdminFilterAttribute[];
    /**
     * The Corpus ID.
     */
    id?: number;
    /**
     * An optional maximum size of the metadata that each document can contain.
     */
    metadataMaxBytes?: number;
    /**
     * The name of the corpus.
     */
    name?: string;
    /**
     * The default query encoder is designed for normal question-answering types
     *
     * @remarks
     * of queries when the text contains the answer.  Swapping the index encoder
     * is generally rare, but can be used to help directly match questions to
     * questions.  This can be useful if you have a FAQ dataset and you want to
     * directly match the user question to the question in the FAQ.
     */
    swapIenc?: boolean;
    swapQenc?: boolean;
    /**
     * When a corpus is "textless", Vectara does not store the original text.
     *
     * @remarks
     * Instead, Vectara converts the text to vectors and only retains metadata.
     */
    textless?: boolean;
}

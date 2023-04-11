import { SpeakeasyBase } from "../../../internal/utils";
import { Sentiment } from "./sentiment";
import { Topic } from "./topic";
import { TopicSentiment } from "./topicsentiment";
export declare class TopicSentimentOutput extends SpeakeasyBase {
    id?: string;
    language?: string;
    sentiments?: Sentiment[];
    text?: string;
    topicSentiments?: TopicSentiment[];
    topics?: Topic[];
}

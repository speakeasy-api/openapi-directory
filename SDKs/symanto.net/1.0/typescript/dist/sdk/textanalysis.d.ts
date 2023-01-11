import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TextAnalysis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * communication - Communication & Tonality
     *
     * Identify the purpose and writing style of a written text.
     *
     * Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]
     *
     * Returned labels:
     * * action-seeking
     * * fact-oriented
     * * information-seeking
     * * self-revealing
    **/
    communication(req: operations.CommunicationRequest, config?: AxiosRequestConfig): Promise<operations.CommunicationResponse>;
    /**
     * ekmanEmotion - Emotion Analysis
     *
     * Detect the emotions of the text based on Ekman.
     *
     * Supported Langauges: [`en`, `de`, `es`]
     *
     * Returned labels:
     * * anger
     * * disgust
     * * fear
     * * joy
     * * sadness
     * * surprise
     * * no-emotion
    **/
    ekmanEmotion(req: operations.EkmanEmotionRequest, config?: AxiosRequestConfig): Promise<operations.EkmanEmotionResponse>;
    /**
     * emotion - Emotion Analysis
     *
     * Detect the emotions of the text.
     *
     * Supported Langauges: [`en`, `de`, `es`]
     *
     * Returned labels:
     * * anger
     * * joy
     * * love
     * * sadness
     * * surprise
     * * uncategorized
    **/
    emotion(req: operations.EmotionRequest, config?: AxiosRequestConfig): Promise<operations.EmotionResponse>;
    /**
     * languageDetection - Language Detection
     *
     * Identifies what language a text is written in. Only languages that our API supports can be analyzed.
     *
     * Returned labels:
     * * language_code of the detected language
    **/
    languageDetection(req: operations.LanguageDetectionRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionResponse>;
    /**
     * personality - Personality Traits
     *
     * Predict the personality trait of author of any written text.
     *
     * Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]
     *
     * Returned labels:
     *
     * * emotional
     * * rational
    **/
    personality(req: operations.PersonalityRequest, config?: AxiosRequestConfig): Promise<operations.PersonalityResponse>;
    /**
     * sentiment - Sentiment Analysis
     *
     * Evaluate the overall tonality of the text.
     *
     * Supported Languages: [`en`, `de`, `es`]
     *
     * Returned labels:
     * * positive
     * * negative
    **/
    sentiment(req: operations.SentimentRequest, config?: AxiosRequestConfig): Promise<operations.SentimentResponse>;
    /**
     * topicSentiment - Extracts topics and sentiments and relates them.
    **/
    topicSentiment(req: operations.TopicSentimentRequest, config?: AxiosRequestConfig): Promise<operations.TopicSentimentResponse>;
}

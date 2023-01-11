package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LanguagesSpoken
 * Languages spoken by at least one staff member.
**/
public class LanguagesSpoken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arabicSpoken")
    public Boolean arabicSpoken;
    public LanguagesSpoken withArabicSpoken(Boolean arabicSpoken) {
        this.arabicSpoken = arabicSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arabicSpokenException")
    public LanguagesSpokenArabicSpokenExceptionEnum arabicSpokenException;
    public LanguagesSpoken withArabicSpokenException(LanguagesSpokenArabicSpokenExceptionEnum arabicSpokenException) {
        this.arabicSpokenException = arabicSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cantoneseSpoken")
    public Boolean cantoneseSpoken;
    public LanguagesSpoken withCantoneseSpoken(Boolean cantoneseSpoken) {
        this.cantoneseSpoken = cantoneseSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cantoneseSpokenException")
    public LanguagesSpokenCantoneseSpokenExceptionEnum cantoneseSpokenException;
    public LanguagesSpoken withCantoneseSpokenException(LanguagesSpokenCantoneseSpokenExceptionEnum cantoneseSpokenException) {
        this.cantoneseSpokenException = cantoneseSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dutchSpoken")
    public Boolean dutchSpoken;
    public LanguagesSpoken withDutchSpoken(Boolean dutchSpoken) {
        this.dutchSpoken = dutchSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dutchSpokenException")
    public LanguagesSpokenDutchSpokenExceptionEnum dutchSpokenException;
    public LanguagesSpoken withDutchSpokenException(LanguagesSpokenDutchSpokenExceptionEnum dutchSpokenException) {
        this.dutchSpokenException = dutchSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("englishSpoken")
    public Boolean englishSpoken;
    public LanguagesSpoken withEnglishSpoken(Boolean englishSpoken) {
        this.englishSpoken = englishSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("englishSpokenException")
    public LanguagesSpokenEnglishSpokenExceptionEnum englishSpokenException;
    public LanguagesSpoken withEnglishSpokenException(LanguagesSpokenEnglishSpokenExceptionEnum englishSpokenException) {
        this.englishSpokenException = englishSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filipinoSpoken")
    public Boolean filipinoSpoken;
    public LanguagesSpoken withFilipinoSpoken(Boolean filipinoSpoken) {
        this.filipinoSpoken = filipinoSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filipinoSpokenException")
    public LanguagesSpokenFilipinoSpokenExceptionEnum filipinoSpokenException;
    public LanguagesSpoken withFilipinoSpokenException(LanguagesSpokenFilipinoSpokenExceptionEnum filipinoSpokenException) {
        this.filipinoSpokenException = filipinoSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frenchSpoken")
    public Boolean frenchSpoken;
    public LanguagesSpoken withFrenchSpoken(Boolean frenchSpoken) {
        this.frenchSpoken = frenchSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frenchSpokenException")
    public LanguagesSpokenFrenchSpokenExceptionEnum frenchSpokenException;
    public LanguagesSpoken withFrenchSpokenException(LanguagesSpokenFrenchSpokenExceptionEnum frenchSpokenException) {
        this.frenchSpokenException = frenchSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("germanSpoken")
    public Boolean germanSpoken;
    public LanguagesSpoken withGermanSpoken(Boolean germanSpoken) {
        this.germanSpoken = germanSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("germanSpokenException")
    public LanguagesSpokenGermanSpokenExceptionEnum germanSpokenException;
    public LanguagesSpoken withGermanSpokenException(LanguagesSpokenGermanSpokenExceptionEnum germanSpokenException) {
        this.germanSpokenException = germanSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hindiSpoken")
    public Boolean hindiSpoken;
    public LanguagesSpoken withHindiSpoken(Boolean hindiSpoken) {
        this.hindiSpoken = hindiSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hindiSpokenException")
    public LanguagesSpokenHindiSpokenExceptionEnum hindiSpokenException;
    public LanguagesSpoken withHindiSpokenException(LanguagesSpokenHindiSpokenExceptionEnum hindiSpokenException) {
        this.hindiSpokenException = hindiSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indonesianSpoken")
    public Boolean indonesianSpoken;
    public LanguagesSpoken withIndonesianSpoken(Boolean indonesianSpoken) {
        this.indonesianSpoken = indonesianSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indonesianSpokenException")
    public LanguagesSpokenIndonesianSpokenExceptionEnum indonesianSpokenException;
    public LanguagesSpoken withIndonesianSpokenException(LanguagesSpokenIndonesianSpokenExceptionEnum indonesianSpokenException) {
        this.indonesianSpokenException = indonesianSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("italianSpoken")
    public Boolean italianSpoken;
    public LanguagesSpoken withItalianSpoken(Boolean italianSpoken) {
        this.italianSpoken = italianSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("italianSpokenException")
    public LanguagesSpokenItalianSpokenExceptionEnum italianSpokenException;
    public LanguagesSpoken withItalianSpokenException(LanguagesSpokenItalianSpokenExceptionEnum italianSpokenException) {
        this.italianSpokenException = italianSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("japaneseSpoken")
    public Boolean japaneseSpoken;
    public LanguagesSpoken withJapaneseSpoken(Boolean japaneseSpoken) {
        this.japaneseSpoken = japaneseSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("japaneseSpokenException")
    public LanguagesSpokenJapaneseSpokenExceptionEnum japaneseSpokenException;
    public LanguagesSpoken withJapaneseSpokenException(LanguagesSpokenJapaneseSpokenExceptionEnum japaneseSpokenException) {
        this.japaneseSpokenException = japaneseSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("koreanSpoken")
    public Boolean koreanSpoken;
    public LanguagesSpoken withKoreanSpoken(Boolean koreanSpoken) {
        this.koreanSpoken = koreanSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("koreanSpokenException")
    public LanguagesSpokenKoreanSpokenExceptionEnum koreanSpokenException;
    public LanguagesSpoken withKoreanSpokenException(LanguagesSpokenKoreanSpokenExceptionEnum koreanSpokenException) {
        this.koreanSpokenException = koreanSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandarinSpoken")
    public Boolean mandarinSpoken;
    public LanguagesSpoken withMandarinSpoken(Boolean mandarinSpoken) {
        this.mandarinSpoken = mandarinSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandarinSpokenException")
    public LanguagesSpokenMandarinSpokenExceptionEnum mandarinSpokenException;
    public LanguagesSpoken withMandarinSpokenException(LanguagesSpokenMandarinSpokenExceptionEnum mandarinSpokenException) {
        this.mandarinSpokenException = mandarinSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portugueseSpoken")
    public Boolean portugueseSpoken;
    public LanguagesSpoken withPortugueseSpoken(Boolean portugueseSpoken) {
        this.portugueseSpoken = portugueseSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portugueseSpokenException")
    public LanguagesSpokenPortugueseSpokenExceptionEnum portugueseSpokenException;
    public LanguagesSpoken withPortugueseSpokenException(LanguagesSpokenPortugueseSpokenExceptionEnum portugueseSpokenException) {
        this.portugueseSpokenException = portugueseSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("russianSpoken")
    public Boolean russianSpoken;
    public LanguagesSpoken withRussianSpoken(Boolean russianSpoken) {
        this.russianSpoken = russianSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("russianSpokenException")
    public LanguagesSpokenRussianSpokenExceptionEnum russianSpokenException;
    public LanguagesSpoken withRussianSpokenException(LanguagesSpokenRussianSpokenExceptionEnum russianSpokenException) {
        this.russianSpokenException = russianSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spanishSpoken")
    public Boolean spanishSpoken;
    public LanguagesSpoken withSpanishSpoken(Boolean spanishSpoken) {
        this.spanishSpoken = spanishSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spanishSpokenException")
    public LanguagesSpokenSpanishSpokenExceptionEnum spanishSpokenException;
    public LanguagesSpoken withSpanishSpokenException(LanguagesSpokenSpanishSpokenExceptionEnum spanishSpokenException) {
        this.spanishSpokenException = spanishSpokenException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vietnameseSpoken")
    public Boolean vietnameseSpoken;
    public LanguagesSpoken withVietnameseSpoken(Boolean vietnameseSpoken) {
        this.vietnameseSpoken = vietnameseSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vietnameseSpokenException")
    public LanguagesSpokenVietnameseSpokenExceptionEnum vietnameseSpokenException;
    public LanguagesSpoken withVietnameseSpokenException(LanguagesSpokenVietnameseSpokenExceptionEnum vietnameseSpokenException) {
        this.vietnameseSpokenException = vietnameseSpokenException;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ReferenceResourceAttributes
 * Model that stores the attributes of a reference.
 * 
 * Many properties match the meaning described in the
 * [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).
**/
public class ReferenceResourceAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public ReferenceResourceAttributes withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annote")
    public String annote;
    public ReferenceResourceAttributes withAnnote(String annote) {
        this.annote = annote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authors")
    public Person[] authors;
    public ReferenceResourceAttributes withAuthors(Person[] authors) {
        this.authors = authors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bib_type")
    public String bibType;
    public ReferenceResourceAttributes withBibType(String bibType) {
        this.bibType = bibType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booktitle")
    public String booktitle;
    public ReferenceResourceAttributes withBooktitle(String booktitle) {
        this.booktitle = booktitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chapter")
    public String chapter;
    public ReferenceResourceAttributes withChapter(String chapter) {
        this.chapter = chapter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crossref")
    public String crossref;
    public ReferenceResourceAttributes withCrossref(String crossref) {
        this.crossref = crossref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public ReferenceResourceAttributes withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("edition")
    public String edition;
    public ReferenceResourceAttributes withEdition(String edition) {
        this.edition = edition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editors")
    public Person[] editors;
    public ReferenceResourceAttributes withEditors(Person[] editors) {
        this.editors = editors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("howpublished")
    public String howpublished;
    public ReferenceResourceAttributes withHowpublished(String howpublished) {
        this.howpublished = howpublished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("immutable_id")
    public String immutableId;
    public ReferenceResourceAttributes withImmutableId(String immutableId) {
        this.immutableId = immutableId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution")
    public String institution;
    public ReferenceResourceAttributes withInstitution(String institution) {
        this.institution = institution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("journal")
    public String journal;
    public ReferenceResourceAttributes withJournal(String journal) {
        this.journal = journal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ReferenceResourceAttributes withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("last_modified")
    public OffsetDateTime lastModified;
    public ReferenceResourceAttributes withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month")
    public String month;
    public ReferenceResourceAttributes withMonth(String month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public ReferenceResourceAttributes withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public ReferenceResourceAttributes withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public ReferenceResourceAttributes withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public String pages;
    public ReferenceResourceAttributes withPages(String pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public ReferenceResourceAttributes withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school")
    public String school;
    public ReferenceResourceAttributes withSchool(String school) {
        this.school = school;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public String series;
    public ReferenceResourceAttributes withSeries(String series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ReferenceResourceAttributes withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ReferenceResourceAttributes withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public String volume;
    public ReferenceResourceAttributes withVolume(String volume) {
        this.volume = volume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public String year;
    public ReferenceResourceAttributes withYear(String year) {
        this.year = year;
        return this;
    }
}
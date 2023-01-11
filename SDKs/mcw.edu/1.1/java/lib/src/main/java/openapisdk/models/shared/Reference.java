package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class Reference {
    public String citation;
    public Reference withCitation(String citation) {
        this.citation = citation;
        return this;
    }
    public String doi;
    public Reference withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    public String editors;
    public Reference withEditors(String editors) {
        this.editors = editors;
        return this;
    }
    public String issue;
    public Reference withIssue(String issue) {
        this.issue = issue;
        return this;
    }
    public Integer key;
    public Reference withKey(Integer key) {
        this.key = key;
        return this;
    }
    public String notes;
    public Reference withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    public String pages;
    public Reference withPages(String pages) {
        this.pages = pages;
        return this;
    }
    public OffsetDateTime pubDate;
    public Reference withPubDate(OffsetDateTime pubDate) {
        this.pubDate = pubDate;
        return this;
    }
    public String pubStatus;
    public Reference withPubStatus(String pubStatus) {
        this.pubStatus = pubStatus;
        return this;
    }
    public String publication;
    public Reference withPublication(String publication) {
        this.publication = publication;
        return this;
    }
    public String publisher;
    public Reference withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    public String publisherCity;
    public Reference withPublisherCity(String publisherCity) {
        this.publisherCity = publisherCity;
        return this;
    }
    public String refAbstract;
    public Reference withRefAbstract(String refAbstract) {
        this.refAbstract = refAbstract;
        return this;
    }
    public String referenceType;
    public Reference withReferenceType(String referenceType) {
        this.referenceType = referenceType;
        return this;
    }
    public Integer rgdId;
    public Reference withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
    public Integer speciesTypeKey;
    public Reference withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
    public String title;
    public Reference withTitle(String title) {
        this.title = title;
        return this;
    }
    public String urlWebReference;
    public Reference withUrlWebReference(String urlWebReference) {
        this.urlWebReference = urlWebReference;
        return this;
    }
    public String volume;
    public Reference withVolume(String volume) {
        this.volume = volume;
        return this;
    }
}
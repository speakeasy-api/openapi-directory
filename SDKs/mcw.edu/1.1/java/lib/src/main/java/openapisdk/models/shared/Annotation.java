package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class Annotation {
    public Integer annotatedObjectRgdId;
    public Annotation withAnnotatedObjectRgdId(Integer annotatedObjectRgdId) {
        this.annotatedObjectRgdId = annotatedObjectRgdId;
        return this;
    }
    public String annotationExtension;
    public Annotation withAnnotationExtension(String annotationExtension) {
        this.annotationExtension = annotationExtension;
        return this;
    }
    public String aspect;
    public Annotation withAspect(String aspect) {
        this.aspect = aspect;
        return this;
    }
    public Integer createdBy;
    public Annotation withCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    public OffsetDateTime createdDate;
    public Annotation withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    public String dataSrc;
    public Annotation withDataSrc(String dataSrc) {
        this.dataSrc = dataSrc;
        return this;
    }
    public String evidence;
    public Annotation withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
    public String geneProductFormId;
    public Annotation withGeneProductFormId(String geneProductFormId) {
        this.geneProductFormId = geneProductFormId;
        return this;
    }
    public Integer key;
    public Annotation withKey(Integer key) {
        this.key = key;
        return this;
    }
    public Integer lastModifiedBy;
    public Annotation withLastModifiedBy(Integer lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
        return this;
    }
    public OffsetDateTime lastModifiedDate;
    public Annotation withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    public String notes;
    public Annotation withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    public String objectName;
    public Annotation withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    public String objectSymbol;
    public Annotation withObjectSymbol(String objectSymbol) {
        this.objectSymbol = objectSymbol;
        return this;
    }
    public OffsetDateTime originalCreatedDate;
    public Annotation withOriginalCreatedDate(OffsetDateTime originalCreatedDate) {
        this.originalCreatedDate = originalCreatedDate;
        return this;
    }
    public String qualifier;
    public Annotation withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
    public Integer refRgdId;
    public Annotation withRefRgdId(Integer refRgdId) {
        this.refRgdId = refRgdId;
        return this;
    }
    public String relativeTo;
    public Annotation withRelativeTo(String relativeTo) {
        this.relativeTo = relativeTo;
        return this;
    }
    public Integer rgdObjectKey;
    public Annotation withRgdObjectKey(Integer rgdObjectKey) {
        this.rgdObjectKey = rgdObjectKey;
        return this;
    }
    public Integer speciesTypeKey;
    public Annotation withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
    public String term;
    public Annotation withTerm(String term) {
        this.term = term;
        return this;
    }
    public String termAcc;
    public Annotation withTermAcc(String termAcc) {
        this.termAcc = termAcc;
        return this;
    }
    public String withInfo;
    public Annotation withWithInfo(String withInfo) {
        this.withInfo = withInfo;
        return this;
    }
    public String xrefSource;
    public Annotation withXrefSource(String xrefSource) {
        this.xrefSource = xrefSource;
        return this;
    }
}